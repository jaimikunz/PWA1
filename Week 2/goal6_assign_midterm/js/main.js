/*
  Jaimi Wachniak.
  Date: 3/16/2014
  Assignment-Mid Terms for PWA-1
*/

<!DOCTYPE html>
<html>
    <head>
    <title>MidTerm Practical</title>
    <script type="text/javascript">
        function displayshowPersonData (){
        var xmldata1 = document.getElementById("xmldata1");
        var personData = xmldata1.getElementsByTagName("personData")[0][1][2][3];
        var name = "Name:" + personData.getElementsByTagName("Name")[0].firstChild.data;
        var name = "person1data:" + personData.getElementsByTagName("person1data")[1].appendChild.data;
        var name = "person2data:" + personData.getElementsByTagName("person2data")[2].appendChild.data;
        var name = "person3data:" + personData.getElementsByTagName("person3data")[3].lastChild.data;
        
alert("personData: \n\n" +name +"\n + person1data + "\n" + person2data + "\n" + person3data + "\n");
    }
            
        window.addEventListener("load",function() {
            document.querySelector("showPersonData").addEventListener("click",displayshowPersonData")
                                                                       });
            </script>
            </head>
            <body>
                <xml id="xmldata1" style="display:none">
                    <persondata>
                    
    <person1data> 
                    {name: Jaimi’, address:{address: ‘2n170 Fairfield Ave’, city: ‘Lombard’, state: ‘IL’}, gpa: [2.5, 3.5, 4.0]};
    </person1data>
                                console.log("person1data")
                                
    <person2data>
                                {name: ‘Holly’, address:{address: ‘432 Love Blvd’, city: ‘Winter Park’, state: ‘Fl’}, gpa: [2.0, 3.1, 4.2]};
</person2data>
                               console.log("person2data")
     <person3data> 
                               {name: ‘Jimmy’, address:{address: ‘665 Grace st.’, city: ‘Winter Park’, state: ‘Fl’}, gpa: [2.0, 3.0, 4.0]};
 </person3data>
                        console.log("person3data")
         </persondata>
    </xml>
                        <button id="showPersonData"> Show Person Data</button>
                    
                function } else{ 
                alert(result);
                break; 
            }; <return result button id="DONE"> end of Show Person Data</button>;
    };
 </body>
 </html>
                            