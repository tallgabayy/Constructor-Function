
            <html>
            <head>
                    <title>Person Table Assignmant</title>
                    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
            </head>
            <body>    
                    
                            <p>ID: <input type="number" min="100000000" id="IDinput" required/></p>
                            <p>Name: <input type="text" id="Ninput" required/></p>
                            <button onclick="add()">add</button>
            

              
             <table  border= "6"> 
                
                        <tr style= "background: cornflowerblue">
                        <th>ID</th>
                        <th>NAME</th>
                    </tr>
                    <tbody id= "tals_body">
                   <tr>
                    <td>203073168</td>
                    <td>Tal Gabay</td>
                   </tr>
                   <tr>
                      <td>345563456</td>
                      <td>Dana Cohen</td>
                   </tr>
                </tbody>
             </table>    
             <script>


             function Person (_ID, _NAME)
             {
this.ID = _ID
this.NAME = _NAME

             }

             function add()
             {


var ID = $('#IDinput').val ()
var NAME = $('#Ninput').val ()
var t = new Person (ID, NAME)
console.log (t)
addRow(t)

             }

             function addRow(t)
             {
                $("#tals_body").append(`<tr><td>${t.ID}</td><td>${t.NAME}</td></tr>`)


             }
             
        



             
             
             
             
             
             
             </script>
             








            </body>
            </html>  
