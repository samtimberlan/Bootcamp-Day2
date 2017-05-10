class Car {
  constructor(name, model, type, numOfDoors, isSaloon, speed, numOfWheels){
	this.name = name;
	this.model = model;
	this.type = type;
	this.numOfDoors = 4;
	this.isSaloon = true;
	this.speed = "";
	numOfWheels = "4";
  

	if(name === null || model === null || type === null || name === undefined || model === undefined || type === undefined || name === "" || model === "" || type === "")
	{
	  this.type = "General";
	  this.model = "GM";
	  this.name = "Vehicle";
	}
	
	if(name === "porsche" || name ==="koenigsegg" || name === "Porsche" || name ==="Koenigsegg")
	{
	  this.numOfDoors = 2;
	  
	}
	
	if(type === "trailer")
	{
	  this.numOfWheels = 8;
	  this.isSaloon = false;
	  
	}
  }
	


drive(gear)
{ 
  if(gear === 1)
  {
    if(this.name === "porsche" || this.name ==="Porsche")
    {
      this.speed = "60km/h";
      console.log("Driving somebody at " + this.speed + " speed.");
    }
    else
    {
      this.speed = "20km/h";
      console.log("Driving somebody at " + this.speed + " speed.");
    }
  }
  
  else if(gear === 2)
  {
    if(this.name === "porsche" || this.name ==="Porsche")
    {
      this.speed = "30km/h";
    }
    this.speed = "50km/h";
  }
  
  else if(gear === 3)
  {
    if(this.name === "porsche" || this.name ==="Porsche")
    {
      this.speed = "100km/h";
    }
    this.speed = "70km/h";
  }
  
  else if(gear === 4)
  {
    if(this.name === "porsche" || this.name ==="Porsche")
    {
      this.speed = "150km/h";
    }
    this.speed = "90km/h";
  }
  
  else if(gear === 5)
  {
    if(this.name === "porsche" || this.name ==="Porsche")
    {
      this.speed = "250km/h";
    }
    this.speed = "120km/h";
  }

  else if(gear === 7 && type === 'trailer'){
    this.speed = "77km/h";
  }
  
  else 
  {
    console.log("In order to drive, gear must be between 1 and 5");
  }
}
}
module.exports = new Car 