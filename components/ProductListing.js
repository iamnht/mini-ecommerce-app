import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
} from "react-native";
import ProductItem from "./ProductItem";

const ProductListing = ({ products }) => {
  const [cart, setCart] = useState([]);

  const toggleCart = (id) => {
    setCart((prev) =>
      prev.includes(id) ? prev.filter((cid) => cid !== id) : [...prev, id]
    );
  };

  const renderItem = ({ item }) => (
    <ProductItem
      item={item}
      isInCart={cart.includes(item.id)}
      onToggleCart={toggleCart}
    />
  );

  if (!products || products.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text>No products available.</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={products}
      showsVerticalScrollIndicator={false}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2}
      contentContainerStyle={styles.list}
      columnWrapperStyle={styles.row}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    paddingTop: 16,
    paddingHorizontal: 16,
  },
  row: {
    justifyContent: "space-between",
    marginBottom: 16,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 32,
  },
});

export default ProductListing;