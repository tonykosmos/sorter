class Sorter {
  constructor() {
    this.el = [];
    this.comp = (a,b) =>{
      return a - b;
    }
    }
     
  add(element) {
    this.el.push(element);
  }

  at(index) {
    return this.el[index];
  }

  get length() {
    return this.el.length;
  }

  toArray() {
    return this.el;
  }
 
  sort(indices) {
    let ind = [];
   for(let i = 0; i<indices.length; i++){
      ind[i] = this.el[indices[i]];
    }
  
   for (let j = 0; j<indices.length; j++){
      if (indices[j+1]<indices[j]){
        let x = indices[j+1];
        indices[j+1] = indices[j];   
        indices[j] = x;
         }
       }
    
  ind.sort(this.comp);
   for (let i = 0; i<indices.length; i++){
      this.el[indices[i]]=ind[i];
   } 
    return this.el;
    } 

  setComparator(compareFunction) {
    this.comp = compareFunction;   
    }
  }
module.exports = Sorter;