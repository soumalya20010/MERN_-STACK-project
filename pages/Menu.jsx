import Head from 'next/head';
import styles from '../styles/Menu.module.css';

const Menu = ({ menuItems }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Our Menu</title>
        <meta name="description" content="Explore our delicious menu" />
      </Head>
      <h1 className={styles.title}>Our Menu</h1>
      <div className={styles.menuList}>
        {menuItems.map((item) => (
          <div key={item.id} className={styles.menuItem}>
            <img src={item.image} alt={item.name} className={styles.image} />
            <h2 className={styles.name}>{item.name}</h2>
            <p className={styles.description}>{item.description}</p>
            <p className={styles.price}>${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  // Fetch menu items from an API or database
  const menuItems = [
    {
      id: 1,
      name: 'Margherita Pizza',
      description: 'Classic margherita pizza with fresh tomatoes, mozzarella, and basil.',
      price: 12.99,
      image: '/img/margherita.jpg',
    },
    {
      id: 2,
      name: 'Pepperoni Pizza',
      description: 'Delicious pepperoni pizza with mozzarella cheese and tomato sauce.',
      price: 14.99,
      image: '/img/Chicken Pepperoni.jpg',
    },
    {
        id: 3,
        name: 'Chicken Golden Delight',
        description: 'Delicious pepperoni pizza with mozzarella cheese and tomato sauce.',
        price: 14.99,
        image: '/img/Chicken_Golden_Delight.jpg',
      },
      {
        id: 4,
        name: 'Farmhouse Pizza',
        description: 'Delicious pepperoni pizza with mozzarella cheese and tomato sauce.',
        price: 14.99,
        image: '/img/Farmhouse.jpg',
      },
      {
        id: 5,
        name: 'Chicken tikka Pizza',
        description: 'Delicious pepperoni pizza with mozzarella cheese and tomato sauce.',
        price: 14.99,
        image: '/img/indian_chicken_tikka.jpg',
      },

    // Add more menu items here
  ];

  return {
    props: {
      menuItems,
    },
  };
}

export default Menu;