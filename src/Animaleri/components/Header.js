import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import React from 'react';


const Header = () => {
    return (
        <ul className="menu biolife-menu clone-main-menu clone-primary-menu" id="primary-menu" data-menuname="main menu">
            <li className="menu-item"><a href="#">Home</a></li>
            <li className="menu-item menu-item-has-children has-megamenu">
                <a href="#" className="menu-name" data-title="Shop">Shop</a>
                <div className="wrap-megamenu lg-width-900 md-width-750">
                    <div className="mega-content">
                        {[
                            {
                                title: 'Fresh Berries',
                                items: ['Fruit & Nut Gifts', 'Mixed Fruits', 'Oranges', 'Bananas & Plantains', 'Fresh Gala Apples']
                            },
                            {
                                title: 'Vegetables',
                                items: ['Berries', 'Pears', 'Chili Peppers', 'Fresh Avocado', 'Grapes']
                            },
                            {
                                title: 'Fresh Fruits',
                                items: ['Basket of apples', 'Strawberry', 'Blueberry', 'Orange', 'Pineapple']
                            },
                            {
                                title: 'Featured Products',
                                items: ['Coffee Creamers', 'Mayonnaise', 'Almond Milk', 'Fruit Jam', 'Beverages']
                            }
                        ].map((category, index) => (
                            <div key={index} className="col-lg-3 col-md-3 col-xs-12 md-margin-bottom-0 xs-margin-bottom-25">
                                <div className="wrap-custom-menu vertical-menu">
                                    <h4 className="menu-title">{category.title}</h4>
                                    <ul className="menu">
                                        {category.items.map((item, idx) => (
                                            <li key={idx}><a href="#">{item}</a></li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </li>
            <li className="menu-item menu-item-has-children has-child">
                <a href="#" className="menu-name" data-title="Product">Product</a>
                <ul className="sub-menu">
                    <li className="menu-item"><a href="#">Omelettes</a></li>
                    <li className="menu-item"><a href="#">Breakfast Scrambles</a></li>
                    <li className="menu-item menu-item-has-children has-child">
                        <a href="#" className="menu-name" data-title="Eggs & other considerations">Eggs & other considerations</a>
                        <ul className="sub-menu">
                            {['Classic Breakfast', 'Huevos Rancheros', 'Everything Egg Sandwich', 'Egg Sandwich', 'Vegan Burrito', 'Biscuits and Gravy', 'Bacon Avo Egg Sandwich'].map((item, idx) => (
                                <li key={idx} className="menu-item"><a href="#">{item}</a></li>
                            ))}
                        </ul>
                    </li>
                    <li className="menu-item"><a href="#">Griddle</a></li>
                    <li className="menu-item menu-item-has-children has-child">
                        <a href="#" className="menu-name" data-title="Sides & Extras">Sides & Extras</a>
                        <ul className="sub-menu">
                            {['Breakfast Burrito', 'Crab Cake Benedict', 'Corned Beef Hash', 'Steak & Eggs', 'Oatmeal', 'Fruit & Yogurt Parfait'].map((item, idx) => (
                                <li key={idx} className="menu-item"><a href="#">{item}</a></li>
                            ))}
                        </ul>
                    </li>
                    <li className="menu-item"><a href="#">Biscuits</a></li>
                    <li className="menu-item"><a href="#">Seasonal Fruit Plate</a></li>
                </ul>
            </li>
            <li className="menu-item menu-item-has-children has-megamenu">
                <a href="#" className="menu-name" data-title="Pages">Demo</a>
                <div className="wrap-megamenu lg-width-800 md-width-750">
                    <div className="mega-content">
                        {/* Repeat similar mapping as above for Demo categories */}
                    </div>
                </div>
            </li>
            <li className="menu-item menu-item-has-children has-megamenu">
                <a href="#" className="menu-name" data-title="Blog">Blog</a>
                <div className="wrap-megamenu lg-width-800 md-width-750">
                    <div className="mega-content">
                        {/* Blog categories mapping */}
                    </div>
                </div>
            </li>
            <li className="menu-item"><a href="contact.html">Contact</a></li>
        </ul>
    );
};

export default Header;