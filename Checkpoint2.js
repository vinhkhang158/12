var menu = ["rau xào", "thịt luộc", "gà rán"]

function Send(){
    
    choose=document.getElementById("choose").value
    b=0
    if (choose == "C"){
        alert("Mời người dùng nhập món ăn muốn thêm vào menu")
        a = prompt()
        menu.push(a)
        localStorage.setItem("menu_key", JSON.stringify(menu))
    }
    if (choose =="R"){
        localStorage.setItem("menu_key", JSON.stringify(menu))
        d=localStorage.getItem("menu_key")
        r = JSON.parse(d)
        
        
        alert(r.join(", "))
        
        
    }
    if(choose =="U"){
        alert("Mời người dùng nhập vào tên món muốn update")
        a = prompt()
        for (var i of menu){
            if (i.indexOf(a) != -1){

                alert("Mời người dùng nhập vào tên món ăn mới")
                menu[b]=prompt()
                
                
            }
        b++

        }
        localStorage.setItem("menu_key", JSON.stringify(menu))

    }
    if(choose =="D"){
        alert("Mời người dùng nhập vào tên món muốn delete")
        a = prompt()
        for (var i of menu){
            if (i.indexOf(a) != -1){
                
                menu.splice(b, 1)
                
                
            }
        b++
        

        }
        localStorage.setItem("menu_key", JSON.stringify(menu))
    }
}
