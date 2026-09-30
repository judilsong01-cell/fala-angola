param(
    [Parameter(Mandatory=$true)][string]$Termo,
    [ValidateSet('todas','umbundu','kimbundu')][string]$Lingua='todas'
)

function Simplificar([string]$Texto) {
    $normal = $Texto.Normalize([Text.NormalizationForm]::FormD)
    $builder = New-Object Text.StringBuilder
    foreach ($char in $normal.ToCharArray()) {
        if ([Globalization.CharUnicodeInfo]::GetUnicodeCategory($char) -ne [Globalization.UnicodeCategory]::NonSpacingMark) {
            [void]$builder.Append($char)
        }
    }
    $builder.ToString().ToLowerInvariant()
}

$consulta = Simplificar $Termo
if ($Lingua -in @('todas','umbundu')) {
    $dados = Get-Content -LiteralPath (Join-Path $PSScriptRoot 'umbundu-portugues.json') -Raw -Encoding UTF8 | ConvertFrom-Json
    $dados.entradas | Where-Object {
        (Simplificar ($_.palavra + ' ' + $_.portugues)).Contains($consulta)
    } | Select-Object lingua,palavra,portugues,fonte
}
if ($Lingua -in @('todas','kimbundu')) {
    $dados = Get-Content -LiteralPath (Join-Path $PSScriptRoot 'kimbundu-indice.json') -Raw -Encoding UTF8 | ConvertFrom-Json
    $dados.entradas | Where-Object {
        (Simplificar $_.identificador_url).Contains($consulta)
    } | Select-Object @{Name='lingua';Expression={'kimbundu'}},identificador_url,url
}
