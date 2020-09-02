import React, { Component } from "react";
import Spinner from "../UI/Spinner/Spinner";
import Responsive from "react-responsive-decorator";
import All from "../../assets/images/all.jpg";
import Accessories from "../../assets/images/accessories.jpg";
import Chat from "../../assets/images/chat.jpg";
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import { connect } from "react-redux";
import {
  filterProducts,
  sortProducts,
} from "../../store/actions/productActions";

import classes from "./Filter.module.scss";

var sectionAcc = {
  backgroundImage: `url(${Accessories})`,
};
var sectionAccText = "АКСЕССУАРЫ";
var sectionAllText = "ВСЕ ТОВАРЫ";
var sectionChatText = "ЧАТ С МАСТЕР-КЛАССАМИ";
var sectionChat = {
  backgroundImage: `url(${Chat})`,
};
var sectionAll = {
  backgroundImage: `url(${All})`,
};

class Filter extends Component {
  state = {
    isMobile: false,
  };

  componentDidMount() {
    this.props.media({ minWidth: 768 }, () => {
      this.setState({
        isMobile: false,
      });
    });

    this.props.media({ maxWidth: 768 }, () => {
      this.setState({
        isMobile: true,
      });
    });
  }

  render() {
    const { isMobile } = this.state;
    return !this.props.filteredProducts ? (
      <Spinner />
    ) : (
      <div className={classes.filter}>
        <div>{this.props.filteredProducts.length} Товары</div>
        <div className="filter-sort">
          Сортировать:{" "}
          <select
            value={this.props.sort}
            onChange={(e) =>
              this.props.sortProducts(
                this.props.filteredProducts,
                e.target.value
              )
            }
          >
            <option>Новые</option>
            <option value="lowest">Сначала дешевле</option>
            <option value="highest">Сначала дороже</option>
          </select>
        </div>
        <div className={classes.filter_size}>
          Категории
          {isMobile ? (
            <select
              className={classes.btn_group}
              value={this.props.category}
              onChange={(e) =>
                this.props.filterProducts(this.props.products, e.target.value)
              }
            >
              <option value="all">Все</option>
              <option value="accessories">Аксессуары</option>
              <option value="chat">Курсы вязания</option>
            </select>
          ) : (
            <LazyLoadComponent>
            <div
              className={classes.category_choice}
              value={this.props.category}
            >
              <button
                value="all"
                onClick={(e) =>
                  this.props.filterProducts(this.props.products, e.target.value)
                }
                style={sectionAll}
              >
                {sectionAllText}
              </button>
              <button
                value="accessories"
                onClick={(e) =>
                  this.props.filterProducts(this.props.products, e.target.value)
                }
                style={sectionAcc}
              >
                {sectionAccText}
              </button>
              <button
                value="chat"
                onClick={(e) =>
                  this.props.filterProducts(this.props.products, e.target.value)
                }
                style={sectionChat}
              >
                {sectionChatText}
              </button>
            </div>
            </LazyLoadComponent>
          )}
        </div>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    category: state.products.category,
    sort: state.products.sort,
    products: state.products.items,
    filteredProducts: state.products.filteredItems,
  }),
  {
    filterProducts,
    sortProducts,
  }
)(Responsive(Filter));
