// CREATED BY DARIO PASSARIELLO
// Copyright 2021

// This function remove element from a multidimensional array using uuid or similar ( important that need to be unique value )

const DeleteElementFromArray = ( array, id ) =>{
  
    array.some(
        function iter (o,i,a) {
      
            if (o.Id === id) {
                a.splice(i, 1); 
                return true;
            }
                
            for (let key of Object.keys(o)) {        
            let value = o[key];
            if(value?.length && typeof value === 'object') return value && value.map(iter);
            }
        
            // OLD SCHOOL WAY 
            // for (var p=0; p < key.length; ++p){
            //  if( o[key[p]]?.length && typeof o[key[p]] === 'object') return o[key[p]] && o[key[p]].some(iter)
            // }      
        
        }
    )
    
}
