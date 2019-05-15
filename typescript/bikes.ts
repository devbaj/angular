class Bike {

	price : number ;
	max_speed : number ;
	miles : number ;
	
	constructor ( price , max_speed ) {
		this.price = price ;
		this.max_speed = max_speed ;
		this.miles = 0 ;
	}

	displayInfo ( ) : any {
		console.log ( 'Price:' , this.price ) ;
		console.log ( 'Top Speed:' , this.max_speed ) ;
		console.log ( 'Total Miles:' , this.miles ) ;
		return this ;
	}

	ride ( ) : any {
		console.log ( 'Riding' ) ;
		this.miles += 10 ;
		return this ;
	}

	reverse ( ) : any {
		console.log ( 'Reversing' ) ;
		if ( this.miles <= 0 ) {
			console.log ( 'Cannot reverse at 0 miles!' ) ;
			return null;
		}
		else {
			this.miles -= 5 ;
			return this ;
		}
	}

}

var bike1 = new Bike ( 19.99 , 10 ) ;
var bike2 = new Bike ( 149.99 , 25 ) ;
var bike3 = new Bike ( 999.99 , 55 ) ;

bike1.ride().ride().ride().reverse().displayInfo() ;
bike2.ride().ride().reverse().reverse().displayInfo() ;
bike3.reverse().reverse().reverse().displayInfo() ;