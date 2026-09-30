// Gera os ícones PNG da aplicação (estrela dourada sobre fundo creme). Sem dependências.
import {deflateSync} from 'node:zlib';
import {writeFileSync} from 'node:fs';
const crcTable=Array.from({length:256},(_,n)=>{let c=n;for(let k=0;k<8;k++)c=c&1?0xedb88320^(c>>>1):c>>>1;return c>>>0;});
const crc=b=>{let c=~0;for(const x of b)c=crcTable[(c^x)&255]^(c>>>8);return ~c>>>0;};
const chunk=(type,data)=>{const t=Buffer.from(type),len=Buffer.alloc(4),sum=Buffer.alloc(4);len.writeUInt32BE(data.length);sum.writeUInt32BE(crc(Buffer.concat([t,data])));return Buffer.concat([len,t,data,sum]);};
function star(cx,cy,R,r){const p=[];for(let i=0;i<10;i++){const a=-Math.PI/2+i*Math.PI/5,d=i%2?r:R;p.push([cx+d*Math.cos(a),cy+d*Math.sin(a)]);}return p;}
const inside=(x,y,p)=>{let c=false;for(let i=0,j=p.length-1;i<p.length;j=i++)if((p[i][1]>y)!==(p[j][1]>y)&&x<(p[j][0]-p[i][0])*(y-p[i][1])/(p[j][1]-p[i][1])+p[i][0])c=!c;return c;};
function png(size,scale){
  const poly=star(size/2,size*.53,size*scale,size*scale*.42),raw=Buffer.alloc(size*(size*4+1)),S=3;
  for(let y=0;y<size;y++){raw[y*(size*4+1)]=0;for(let x=0;x<size;x++){let hit=0;for(let a=0;a<S;a++)for(let b=0;b<S;b++)if(inside(x+(a+.5)/S,y+(b+.5)/S,poly))hit++;const t=hit/(S*S),o=y*(size*4+1)+1+x*4;
    raw[o]=Math.round(251*(1-t)+234*t);raw[o+1]=Math.round(248*(1-t)+189*t);raw[o+2]=Math.round(242*(1-t)+101*t);raw[o+3]=255;}}
  const ihdr=Buffer.alloc(13);ihdr.writeUInt32BE(size,0);ihdr.writeUInt32BE(size,4);ihdr[8]=8;ihdr[9]=6;
  return Buffer.concat([Buffer.from([137,80,78,71,13,10,26,10]),chunk('IHDR',ihdr),chunk('IDAT',deflateSync(raw)),chunk('IEND',Buffer.alloc(0))]);
}
writeFileSync('public/icon-192.png',png(192,.36));
writeFileSync('public/icon-512.png',png(512,.36));
writeFileSync('public/icon-maskable-512.png',png(512,.27));
