const url='https://script.google.com/macros/s/AKfycbxHr8Wfy7a7QIpcw30AVJxmnJOv4oEn2Hn2qy23Tl7JttmJ89dh9zsB44HdqIIe92CrvA/exec';





function QueryString(qStr){

    //alert("Enter in ReportList.js QueryString");//https://script.google.com/macros/s/AKfycbxpv00JQLhKWnIWzn8QtWX1s0mrjkThBp-Yj2bTJXPLCJKf2V-scVtw-0EJINIA4PJ3Rw/exec
    const val=qStr;
	//alert(val);
    const url_parameter=`${url}?SchoolName=${val}`;
    //const url_parameter=`${url}`;	

    //console.log('click');
    console.log(url_parameter);
    transition_Effect.showTransition();   //call vue showTransition function at  main.min.js	
	
    const formData=new FormData();
	
    fetch(url_parameter,{
        method:'POST',
        body:formData
    })

    .then(res =>res.json())   // 把request json化, 使用 json() 可以得到 json 物件.then(result => {
    //https://www.youtube.com/watch?v=0No2n9UTxUc
    .then(data=>{
		transition_Effect.hideTransition();   //call vue hideTransition function at main.min.js
		
    const total = Object.keys(data).length;  //計算共有幾筆已填報的資料,https://stackoverflow.com/questions/15209136/how-to-count-length-of-the-json-array-element
	console.log("資料筆數共有：%s筆",total);
    document.getElementById('DateTime').innerHTML = "統計至";

    
	document.getElementById('DateTime').innerHTML += new Date();
	document.getElementById("ReportList").innerHTML=``; 
	console.log(data);				
	
	for( i=1;i<=total;i++){
            	document.getElementById("ReportList").innerHTML+=`<button class="btn-outline-danger">${i}</button>`;		    
             	document.getElementById("ReportList").innerHTML+=`<button class="btn-outline-danger">${data[i].SchoolName}</button>&nbsp;&nbsp<button>${data[i].DateTime}</button>&nbsp;&nbsp <span style="color:red">${data[i].PaperDelivered}<span style="color:white">(${data[i].SchoolID})</span></span><br>`;  //帶入填報人姓名        

		
				
	   }
	   
		
     });
      
}


