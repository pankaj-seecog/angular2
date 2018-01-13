
export class TriangleService {

area(a : Number,b : Number,c : Number){
  let t1=a.valueOf();
  let t2 = b.valueOf();
  let t3 = c.valueOf();
var s = (t1+t2+t3)/2.0;
var ar = Math.sqrt((s-t1)*(s-t2)*(s-t3));
return ar;
}

}
