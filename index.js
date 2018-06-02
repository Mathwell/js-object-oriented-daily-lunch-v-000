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
    return this.customers().map(customer => {
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

deliveries(){
  return store.deliveries.find(delivery =>{
    return delivery.mealId=this.id
  })
}

customers(){
  return this.deliveries().map(delivery => {
    return delivery.customer()
  })
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
      return delivery.customerId===this.id;
    })
  }

  meals(){
    return this.deliveries.map(delivery =>{
      return delivery.meal();
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

  customer(){
     return store.customers.find(customer => {
       return customer.id === this.customerId;
     });
   }

  meal() {
     return store.meals.find(meal => {
       return meal.id === this.mealId;
     });
  }


   neighborhood(){
     return store.neighborhoods.find(neighborhood =>{
       return neighborhood.id===this.neighborhoodId
     })
   }
}
