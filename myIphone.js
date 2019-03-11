function Mobile(_com, _mo, _co, _he)
{
  this.code = "123"
  this.company = _com
  this.model = _mo
  this.color = _co
  this.height = _he
  this.ring = function() {
    
    console.error (this.company + " " + this.model + " " +  "ring ring ring")
  }
  
 
}

var iphone6Plus = new Mobile ("Iphone", "6 Plus", "Black", "16cm")
