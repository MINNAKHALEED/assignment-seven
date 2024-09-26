import Card from "../cardcomponent/Card";


const AllCard = () => {


  const products = [
    { title: 'Apple', price: 12, rate: 5, description: 'this is an apple' },
    { title: 'Orange', price: 10, rate: 4, description: 'this is an orange' },
    { title: 'Banana', price: 11, rate: 3, description: 'this is a banana' },
  ];

  return (
    <div>
      <Card products={products}/>
    </div>
  );
}

export default AllCard;
