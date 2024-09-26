/* eslint-disable react/prop-types */

import styles from './card.module.css';


const Card = ({products}) => {

console.log(products);
  return (
    <div className={styles.div}>
      {
products.map((product, index) => {
return(
  <div key={index}>
<p>{product.title}</p>
<h5>{product.price}</h5>
<span>{product.rate}</span>
<p>{product.description}</p>
  </div>
)
})
      }
    </div>
  );
}

export default Card;
