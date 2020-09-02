import React, { Component } from "react";
import formatCurrency from "../../util";
import { withRouter } from "react-router-dom";
import Modal from "react-modal";
import { removeFromCart } from "../../store/actions/cartActions";
import { connect } from "react-redux";
import { compose } from "redux";
import {
  createOrder,
  clearOrder,
  clearCart,
} from "../../store/actions/orderActions";

import classes from "./Cart.module.scss";

class Cart extends Component {
  constructor(props) {
    super(props);
    let today = new Date(),
      setNewDate =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();
    this.state = {
      name: "",
      email: "",
      address: "",
      warehouse: "",
      phone: "",
      comment: "",
      payment: "Оплата наличными",
      date: setNewDate,
      showCheckout: false,
      orderSuccess: false,
    };
  }

  closeModal = () => {
    this.props.history.push("/");
    this.props.clearOrder();
  };
  authRedirect = () => {
    this.props.history.push("/auth");
  };

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  createOrder = (e) => {
    e.preventDefault();
    const order = {
      name: this.state.name,
      email: this.state.email,
      address: this.state.address,
      warehouse: this.state.warehouse,
      phone: this.state.phone,
      payment: this.state.payment,
      date: this.state.date,
      comment: this.state.comment,
      cartItems: this.props.cartItems,
      total: this.props.cartItems.reduce((a, c) => a + c.price * c.count, 0),
    };
    this.props.createOrder(order, this.props.token);
  };

  render() {
    const { cartItems } = this.props;
    return (
      <div>
        {cartItems.length === 0 ? (
          <div className={classes.cart}>Cart is empty</div>
        ) : (
          <div className={classes.cart}>
            You have {cartItems.length} in the cart{" "}
          </div>
        )}

        {this.state.orderSuccess && (
          <Modal isOpen={true} onRequestClose={this.closeModal}>
            <button className={classes.closeModal} onClick={this.closeModal}>
              x
            </button>
            <div className={classes.order_details}>
              <h3 className={classes.success_message}>
                Ваш заказ успешно принят
              </h3>
            </div>
          </Modal>
        )}

        {/* Cart Modal         */}

        <Modal isOpen={true} onRequestClose={this.closeModal}>
          <div>
            <div className={classes.cart}>
              <button className={classes.closeModal} onClick={this.closeModal}>
                x
              </button>
              <ul className={classes.cart_items}>
                {cartItems.map((item) => (
                  <li key={item._id}>
                    <div>
                      <img src={item.cover} alt={item.title}></img>
                    </div>
                    <div>
                      <div>{item.title}</div>
                      <div className={classes.cart_items_right}>
                        {formatCurrency(item.price)} x {item.count}{" "}
                        <button
                          className="button"
                          onClick={() => this.props.removeFromCart(item)}
                        >
                          Удалить
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className={classes.cart}>
              <div className={classes.total}>
                <div>
                  Итого:{" "}
                  {formatCurrency(
                    cartItems.reduce((a, c) => a + c.price * c.count, 0)
                  )}
                </div>
                {this.props.isAuthenticated ? (
                  <button
                    disabled={cartItems.length === 0}
                    onClick={() => {
                      this.setState({ showCheckout: true });
                    }}
                    className="button primary"
                  >
                    Оформить заказ
                  </button>
                ) : (
                  <button
                    disabled={cartItems.length === 0}
                    onClick={this.authRedirect}
                    className="button primary"
                  >
                    Оформить заказ
                  </button>
                )}
              </div>
            </div>
            {/* Order Summary */}
            {this.state.showCheckout && (
              <div className="cart">
                <form onSubmit={this.createOrder} className="main">
                  <ul className="form-container">
                    <li>
                      <label>Email</label>
                      <input
                        name="email"
                        type="email"
                        required
                        onChange={this.handleInput}
                      ></input>
                    </li>
                    <li>
                      <label>ФИО</label>
                      <input
                        name="name"
                        type="text"
                        required
                        onChange={this.handleInput}
                      ></input>
                    </li>
                    <li>
                      <label>Ваш город</label>
                      <input
                        name="address"
                        type="text"
                        required
                        onChange={this.handleInput}
                      ></input>
                    </li>
                    <li>
                      <label>Отделение Новой почты</label>
                      <input
                        name="warehouse"
                        type="text"
                        required
                        onChange={this.handleInput}
                      ></input>
                    </li>
                    <li>
                      <label>Мобильный телефон</label>
                      <input
                        name="phone"
                        type="tel"
                        pattern="^[ 0-9]+$"
                        required
                        onChange={this.handleInput}
                      ></input>
                    </li>
                    <li>
                      <label>Способ оплаты</label>
                      <select
                        name="payment"
                        value={this.state.payment}
                        onChange={this.handleInput}
                      >
                        <option value="Оплата наличными">
                          Оплата наличными
                        </option>
                        <option value="Оплата на карту">Оплата на карту</option>
                      </select>
                    </li>
                    <li>
                      <label>Комментарии к заказу</label>
                      <textarea
                        name="comment"
                        onChange={this.handleInput}
                      ></textarea>
                    </li>

                    <li>
                      <button
                        disabled={cartItems.length === 0}
                        className="button primary"
                        type="submit"
                        onClick={() => {
                          this.setState({ orderSuccess: true });
                        }}
                      >
                        Подтвердить заказ
                      </button>
                    </li>
                  </ul>
                </form>
              </div>
            )}
          </div>
        </Modal>
      </div>
    );
  }
}

Modal.setAppElement('#root');

export default withRouter(
  connect(
    (state) => ({
      order: state.order.order,
      cartItems: state.cart.cartItems,
      token: state.auth.token,
      isAuthenticated: state.auth.token !== null,
    }),
    { removeFromCart, createOrder, clearOrder, clearCart }
  )(compose(Cart))
);
