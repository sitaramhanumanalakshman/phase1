function getdata(file,callback){
	var xhr=new XMLHttpRequest();
	xhr.overrideMimeType("application/json");
	xhr.open("GET",file,true);
	xhr.onreadystatechange=function(){
         if(xhr.readyState === 4 && xhr.status=="200"){
         	callback(xhr.responseText)
	}
   }
   xhr.send(null);
} 
getdata("dynamic.json",function(text){
	var data=JSON.parse(text);
	console.log(data);
	personalinfo(data.profile);
	carrier(data.carrier);
	education(data.education);
})
//leftdiv

  var left=document.querySelector(".leftdiv");
 function personalinfo(pi){

 var image=document.createElement("img");
         image.src="images.png"; 
         left.appendChild(image);

          var name=document.createElement("h2");
         name.textContent=pi.name;
         left.appendChild(name);

         var role=document.createElement("h4");
         role.textContent=pi.role;
         left.appendChild(role);

         var hr=document.createElement("hr");
         left.appendChild(hr);

         var place=document.createElement("p")
         place.textContent=pi.place;
         left.appendChild(place);

         var email=document.createElement("p")
         email.textContent=pi.email;
         left.appendChild(email);

}
//rightdiv
  var right=document.querySelector(".rightdiv");
 // carrier objective
          function carrier(ca){

        var  heading=document.createElement("h1");
             heading.textContent="Carrier objective";
             right.appendChild(heading);

        var hr=document.createElement("hr");
              right.appendChild(hr);

        var carrier=document.createElement("p");
            carrier.textContent=ca.info;
             right.appendChild(carrier);

    }

 // education details
      function education(edu){

        var heading=document.createElement("h1");
             heading.textContent="educationdetails";
             right.appendChild(heading);

        var hr=document.createElement("hr");
             right.appendChild(hr);

        var table=document.createElement("table");
        table.border="2";
        var tr1="<tr><th>degree</th><th>institute</th><th>per</th><th>yop</th></tr>";
        var tr2="";
        for(var i=0; i<edu.length;i++){
            tr2=tr2+"<tr><td>"+edu[i].degree+"</td><td>"+edu[i].institute+"</td><td>"+edu[i].per+"</td><td>"+edu[i].yop+"</td></tr>";

        }
        table.innerHTML=tr1+tr2;
        right.appendChild(table);
	    }




