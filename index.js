// global datastore
let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };
let neighborhoodId=0;
let customerId=0;
let mealId=0;
let deliveryId=0;

class Neighborhood{
  constructor(name){
    this.name=name;
    this.id=neighborhoodId++;
    store.neighborhoods.push(this)
  }
  deliveries(){
    return this.customers().map(customer=>{
      return customer.deliveries();
    })
  }
  customers(){
    return store.customers.filter(customer=>{
      return customer.neighborhoodId===this.id
    })
  }
}

class Meal{
constructor(title,price){
  this.title=title;
  this.price=price;
  this.id=mealId++;
  store.meals.push(this)
}

}

class Customer{
  constructor(name,neighborhood){
    this.name=name;
    this.id=customerId++;
    this.neighborhoodId=neighborhood
    store.customers.push(this);
  }

  deliveries(){
    return store.deliveries.filter(delivery =>{
      delivery.customerId===this.id;
    })
  }

}

class Delivery{
  constructor(meal,customer,neighborhood){
    this.mealId=meal;
    this.customerId=customer
    this.neighborhoodId=neighborhood
    this.id=deliveryId++;
    store.deliveries.push(this)
  }

  meal() {
     return store.meals.find(meal => {
       return meal.id === this.mealId;
     });
  }


  customer() {
     return store.customers.find(customer => {
       return customer.id === this.customerId;
     });
   }

}
