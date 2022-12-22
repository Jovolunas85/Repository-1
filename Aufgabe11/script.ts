namespace A10 {
    
    let counter = 0;
    let todoliste: todos[] = [];
    interface todos{
        texts: string;
        checked: boolean;
    }
    function save_todo(){
        
        if(text.value != ""){
            todoliste.unshift({texts:text.value, checked: false});
            counter++;
            document.querySelector('#total').innerHTML = String(counter);
            create_todo();
        }
        else{
            alert("Please enter a task");
            return;
        }
    }
    let text: HTMLInputElement= document.querySelector("input");
    
    function create_todo(){
        const wrapper: HTMLElement= <HTMLElement> document.querySelector(".wrapper");
        wrapper.innerHTML = "";
        for(let index:number = 0; index <todoliste.length; index++){
        const newDiv= document.createElement("div");
        newDiv.className= "myClass";
        const newCheck = document.createElement("i");
        const newTrash= document.createElement("i");
        
            const newP= document.createElement("p");
            
                newP.innerHTML= todoliste[index].texts;
                
                console.log(todoliste[index].checked);
                console.log(todoliste[index].texts);
            
            newDiv.appendChild(newP);
            text.value = "";
            newTrash.className ="fa fa-trash-alt";
            if(todoliste[index].checked==true){
            newCheck.className ="far fa-check-circle";
            }
            else{
                newCheck.className="far fa-circle";
            }
            newP.appendChild(newCheck);
            newP.appendChild(newTrash);
            wrapper.appendChild(newDiv);
            newCheck.addEventListener("click",function(){
                
                    todoliste[index].checked= !todoliste[index].checked;
                    create_todo();
            })
        
        
    
        newTrash.addEventListener("click", function(){
            counter--;
            document.querySelector('#total').innerHTML = String(counter);
            todoliste.splice(index, 1);
            create_todo();
        })
    
        
    }
    }
    
    document.querySelector(".tasks").addEventListener('keypress',function(e:KeyboardEvent){
        if(e.key === 'Enter'){
            save_todo()
          
        }
    }
    )
}
