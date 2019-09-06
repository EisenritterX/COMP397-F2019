// Immediate Invoked Anonymous Function

(function(){
    function Init(){
        console.log("Initialization Start");

        let x: Number = 10;
    }

    window.onload = Init;
})();
