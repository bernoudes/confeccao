--here were create all de tables for the project
CREATE TABLE customers(
	id SERIAL PRIMARY KEY,
	name VARCHAR(40) NOT NULL,
	cpf VARCHAR(20) UNIQUE,
	name_brand VARCHAR(40) NOT NULL,
	credit MONEY
);

CREATE TABLE salesman(
	id SERIAL PRIMARY KEY,
	name VARCHAR(40) NOT NULL,
	cpf VARCHAR(20) UNIQUE,
	admin BOOL NOT NULL,
	login VARCHAR(20) NOT NULL,
	password VARCHAR(30) NOT NULL,
	CONSTRAINT const_longin UNIQUE (login)
);

/*cd_orders is used to create cd_production, which is used to create unique code
with the proposal not to change the old company code
The logic is (00-00-000001 - year - month - code) this is the code
because of this don't create the orders by insert, use the function
create_order.*/
CREATE TABLE orders(
	id SERIAL PRIMARY KEY,
	cd_orders VARCHAR(15) NOT NULL UNIQUE,
	customers_id SERIAL references customers(id) NOT NULL,
	salesman_id SERIAL references salesman(id) NOT NULL,
	money_input MONEY,
	money_rest MONEY,
	money_all MONEY,
	finished BOOL,
	date_begin DATE,
	is_cancel BOOL DEFAULT false,
	is_cancel_text text DEFAULT null
);

CREATE TABLE product(
	id SERIAL PRIMARY KEY,
	type_product VARCHAR(20)
);


/*The logic of cd_production is cd_orders more the number of product ex: 11-03-00003-1
in this case the final 1 is the true primary key of production don't create the production
for insert, use the function (select create_production(...))*/

/*the tables execution_production and seam are auxiliary table of production,
don't insert nothing in there directly*/
CREATE TABLE production(
	cd_production VARCHAR(15) PRIMARY KEY NOT NULL,
	orders_id SERIAL references orders(id) NOT NULL,
	product_id SERIAL references product(id) NOT NULL,
	cd_refer_production INTEGER,
	price_unity MONEY,
	quantity_products INTEGER,
	embroidery BOOL,
	silk BOOL,
	laser_applique BOOL,
	laser_holes BOOL,
	sublimation_applique BOOL,
	sublimation_body BOOL,
	vies BOOL,
	forro BOOL
);


CREATE TABLE execution_production(
	cd_production VARCHAR(15) references production(cd_production) NOT NULL,
	print TIMESTAMP,
	program_embroidery TIMESTAMP,
	separation TIMESTAMP,
	dublagem TIMESTAMP,
	cut TIMESTAMP,
	laser_holes TIMESTAMP,
	laser_applique TIMESTAMP,
	data_print_sublimation_applique TIMESTAMP,
	quant_print_sublimation_applique TIMESTAMP,
	data_print_sublimation_forro TIMESTAMP,
	quant_print_sublimation_forro TIMESTAMP,
	vies TIMESTAMP,
	silk TIMESTAMP,
	peak TIMESTAMP,
	sublimation_applique TIMESTAMP,
	sublimation_forro TIMESTAMP
);

CREATE TABLE seam(
	cd_production VARCHAR(15) references production(cd_production) NOT NULL,
	forro_front TIMESTAMP,
	side_back TIMESTAMP,
	vies TIMESTAMP,
	peak TIMESTAMP,
	fecho TIMESTAMP,
	swearband TIMESTAMP,
	arremate TIMESTAMP,
	passadoria TIMESTAMP
);



