export  function getFormattedDate (date){
    if(date===null || date === undefined){
        var d = new Date();

        d = d.getFullYear() + "-" + ('0' + (d.getMonth() + 1)).slice(-2) + "-" + ('0' + d.getDate()).slice(-2);

        return d;
    }
    else{
        var d = new Date(date);

        d = d.getFullYear() + "-" + ('0' + (d.getMonth() + 1)).slice(-2) + "-" + ('0' + d.getDate()).slice(-2) ;

        return d;
   }
}