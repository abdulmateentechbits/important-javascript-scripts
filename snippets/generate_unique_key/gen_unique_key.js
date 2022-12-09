// pattren like _lbalurteou8s6k6max_ ,_lbalvzs2foafd12ofcr_ ,....

export function genUUId() {
    const head = Date.now().toString(36);
    const tail = Math.random().toString(36).substring(2);
    return "_" + head + tail + "_";
  }
  console.log(genUUId());
  