--here were create all de tables for the project
CREATE TABLE customers(
	id SERIAL PRIMARY KEY,
	name VARCHAR(40) NOT NULL,
	cpf VARCHAR(20) UNIQUE,
	name_brand VARCHAR(40) NOT NULL,
	isDeleted BOOL DEFAULT FALSE,
	credit MONEY
);

CREATE TABLE salesman(
	id SERIAL PRIMARY KEY,
	name VARCHAR(40) NOT NULL,
	cpf VARCHAR(20) UNIQUE,
	admin BOOL NOT NULL,
	login VARCHAR(20) NOT NULL,
	password VARCHAR(255) NOT NULL,
	isFormerEmployee BOOL DEFAULT false,
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

CREATE TABLE production(
	cd_production VARCHAR(15) PRIMARY KEY NOT NULL,
	orders_id SERIAL references orders(id) NOT NULL,
	product_id SERIAL references product(id) NOT NULL,
	cd_refer_production INTEGER,
	sales_price_unity MONEY,
	sales_quantity_products INTEGER,
	sales_embroidery BOOL,
	sales_silk BOOL,
	sales_laser_applique BOOL,
	sales_laser_holes BOOL,
	sales_sublimation_applique BOOL,
	sales_sublimation_body BOOL,
	sales_vies BOOL,
	sales_forro BOOL,
	exec_print TIMESTAMP,
	exec_program_embroidery TIMESTAMP,
	exec_separation TIMESTAMP,
	exec_dublagem TIMESTAMP,
	exec_cut TIMESTAMP,
	exec_laser_holes TIMESTAMP,
	exec_laser_applique TIMESTAMP,
	exec_data_print_sublimation_applique TIMESTAMP,
	exec_quant_print_sublimation_applique TIMESTAMP,
	exec_data_print_sublimation_forro TIMESTAMP,
	quant_print_sublimation_forro TIMESTAMP,
	exec_vies TIMESTAMP,
	exec_silk TIMESTAMP,
	exec_peak TIMESTAMP,
	exec_sublimation_applique TIMESTAMP,
	exec_sublimation_forro TIMESTAMP,
	seam_forro_front TIMESTAMP,
	seam_side_back TIMESTAMP,
	seam_vies TIMESTAMP,
	seam_peak TIMESTAMP,
	seam_fecho TIMESTAMP,
	seam_swearband TIMESTAMP,
	seam_arremate TIMESTAMP,
	seam_passadoria TIMESTAMP
);
