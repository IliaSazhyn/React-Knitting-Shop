import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import formatCurrency from "../../util";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import Modal from "react-modal";
import Image from "../UI/Carousel/Image";
import Spinner from "../UI/Spinner/Spinner";
import { fetchProducts } from "../../store/actions/productActions";
import { addToCart } from "../../store/actions/cartActions";
import { connect } from "react-redux";
import { compose } from "redux";

import classes from "./Products.module.scss";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
    };
  }

  componentDidMount() {
    this.props.fetchProducts();
  }

  openModal = (product) => {
    this.setState({ product });
  };
  closeModal = () => {
    this.setState({ product: null });
    this.props.history.push("/products");
  };

  render() {
    const { product } = this.state;
    return (
      <div>
        <Fade bottom cascade>
          {!this.props.products ? (
            <Spinner />
          ) : (
            <ul className={classes.products}>
              {this.props.products.map((product) => (
                <li key={product._id}>
                  <div className={classes.product}>
                    <a
                      href={"#" + product._id}
                      onClick={() => this.openModal(product)}
                    >
                      <img src={product.cover} alt={"product_" + product._id} />
                      <p>{product.title}</p>
                    </a>
                    <div className={classes.product_price}>
                      <div>{formatCurrency(product.price)}</div>
                      <button
                        onClick={() =>
                          this.props.addToCart(product, this.state.setValue)
                        }
                        className="button primary"
                      >
                        В Корзину
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </Fade>
        {product && (
          <Modal isOpen={true} onRequestClose={this.closeModal}>
            <Zoom>
              <button className={classes.closeModal} onClick={this.closeModal}>
                x
              </button>
              <div className={classes.product_details}>
                <div className={classes.product_details_description}>
                  <p>
                    <strong>{product.title}</strong>
                  </p>
                  <p>{product.description}</p>
                  <p>{product.set}</p>
                  <p>{product.material}</p>
                  <p>{product.size}</p>
                  <p>{product.comment}</p>
                  <div className={classes.product_details_modal}>
                    <Image
                      img={product}
                      id={product._id}
                      className={classes.product_details_image}
                    />
                    <div className={classes.product_details_modal_price}>
                      Цена: {formatCurrency(product.price)}
                    </div>
                    <button
                      className="button primary"
                      onClick={() => {
                        this.props.addToCart(product);
                        this.closeModal();
                      }}
                    >
                      В Корзину
                    </button>
                  </div>
                </div>
              </div>
            </Zoom>
          </Modal>
        )}
      </div>
    );
  }
}
Modal.setAppElement('#root');

export default withRouter(
  connect((state) => ({ products: state.products.filteredItems }), {
    fetchProducts,
    addToCart,
  })(compose(Products))
);
