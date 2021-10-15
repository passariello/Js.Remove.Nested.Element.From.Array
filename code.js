// CREATED BY DARIO PASSARIELLO
// Copiright 2020

const DeleteElementFromArray = ( array, id ) =>{
    array.some(function iter (o,i,a) {
        if (o.Id === id) {
            a.splice(i, 1)
            return true
        }
        var key = Object.keys(o)
        for(var p=0; p < key.length; ++p){
            if( o[key[p]]?.length && typeof o[key[p]] === 'object'){
            return o[key[p]] && o[key[p]].some(iter)
            }
        }
    })
}

/*
usage:

your_multidimensional_array =
[
    {
        "Id": "65affc02-834f-41dc-b4cf-0f4200d8a533",
        "test": "7eebd408-4aef-4a71-b96c-0151de3d41f4",
        "NestedArray": [
            {
                "Id": "1cc27e18-1cb6-4e93-893b-a018fc134ed8",
                "test": "69967e2d-b44e-431e-a012-9b18126ed34b",
            }
        ]
    }
]

your_uuid = 69967e2d-b44e-431e-a012-9b18126ed34b

Example:

DeleteElementFromArray( your_multidimensional_array , your_uuid )
*/