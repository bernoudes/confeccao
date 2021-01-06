--insert for test
--products----------------------------------------------------
INSERT INTO product (type_product) VALUES ('bonés');
INSERT INTO product (type_product) VALUES ('camisetas');
INSERT INTO product (type_product) VALUES ('mascaras');
INSERT INTO product (type_product) VALUES ('shorts');

--customers---------------------------------------------------
--(name VARCHAR(40), cpf VARCHAR(20),name_brand VARCHAR(40))
SELECT create_customers('Josias', '56994853098','God is ten');
SELECT create_customers('Nixihuis', '60823809080','Thor Hamer');
SELECT create_customers('Ziaos', '06228762010','New York');
SELECT create_customers('Lilye', '00108372057','Times');
SELECT create_customers('Mubil', '14128409022','Crises');
SELECT create_customers('Duova', '31624919081','fix');
SELECT create_customers('Gelur', '08618795038','Boxes');
SELECT create_customers('Urcuo', '99375191010','eyes');
SELECT create_customers('Taoma', '66296647018','oneTwo');
SELECT create_customers('Kefuope', '44538598054','less');
SELECT create_customers('Loadipul', '96392333070','The Last');

--salesman-----------------------------------------------------
--(name VARCHAR(40), cpf VARCHAR(20),admin BOOL, login_2 VARCHAR(20),password VARCHAR(30))
SELECT create_salesman('Dagteadan','18312328041',true,'nick_Dagteadan','12345');
SELECT create_salesman('Goegioborn','66728714030',false,'nick_Goegioborn','12345');
SELECT create_salesman('Kopen','27328320060',false,'nick_Kopen','12345');
SELECT create_salesman('Beadan','63018972007',false,'nick_Beadan','12345');
SELECT create_salesman('Anrond','81682734005',false,'nick_Anrond','12345');
SELECT create_salesman('Berandir','28143458008',false,'nick_Berandir','12345');

--orders-----------------------------------------------------
--(salesman_id INTEGER, customers_id INTEGER, money_input MONEY, money_all MONEY)
SELECT create_orders(1,1,CAST(125.20 AS MONEY),CAST(5000 AS MONEY));
SELECT create_orders(5,11,CAST(300.20 AS MONEY),CAST(8000 AS MONEY));
SELECT create_orders(6,10,CAST(60.20 AS MONEY),CAST(9000 AS MONEY));
SELECT create_orders(4,10,CAST(890.20 AS MONEY),CAST(1600 AS MONEY));
SELECT create_orders(2,1,CAST(750.20 AS MONEY),CAST(950 AS MONEY));
SELECT create_orders(1,9,CAST(780.20 AS MONEY),CAST(3000 AS MONEY));
SELECT create_orders(5,8,CAST(900.20 AS MONEY),CAST(1100 AS MONEY));
SELECT create_orders(5,7,CAST(1000.20 AS MONEY),CAST(8000 AS MONEY));
SELECT create_orders(4,6,CAST(1100.20 AS MONEY),CAST(8952 AS MONEY));
SELECT create_orders(4,5,CAST(10.20 AS MONEY),CAST(45 AS MONEY));
SELECT create_orders(3,11,CAST(20.20 AS MONEY),CAST(987 AS MONEY));
SELECT create_orders(2,4,CAST(155.20 AS MONEY),CAST(8970 AS MONEY));
SELECT create_orders(1,3,CAST(800.20 AS MONEY),CAST(9842964 AS MONEY));
SELECT create_orders(4,2,CAST(90.20 AS MONEY),CAST(65487 AS MONEY));
SELECT create_orders(5,1,CAST(148.20 AS MONEY),CAST(32154 AS MONEY));
SELECT create_orders(6,10,CAST(600.20 AS MONEY),CAST(658575 AS MONEY));

--production-------------------------------------------------------
/*
SELECT  create_production(
	orders_id INTEGER, product_id INTEGER, price_unity MONEY,quantity_products INTEGER,
	embroidery BOOL,silk BOOL,laser_applique BOOL,laser_holes BOOL, sublimation_applique BOOL,
	sublimation_body BOOL, vies BOOL, forro BOOL
);
*/

SELECT  create_production(5 , 1 , CAST(154 AS MONEY) , 50,
	true ,true ,false ,false , true ,false , true , true );
	
SELECT  create_production(8 , 2 , CAST(2154 AS MONEY) , 40,
	true ,true ,false ,false , true ,false , true , true );
	
SELECT  create_production(13 , 3 , CAST(3414 AS MONEY) , 10,
	true ,true ,false ,false , true ,false , true , true );
	
SELECT  create_production(12 , 2 , CAST(89754 AS MONEY) , 20,
	true ,true ,false ,false , true ,false , true , true );
	
SELECT  create_production(7 , 4 , CAST(6548 AS MONEY) , 60,
	true ,true ,false ,false , true ,false , true , true );
	
SELECT  create_production(6 , 2 , CAST(584 AS MONEY) , 70,
	true ,true ,false ,false , true ,false , true , true );
	
SELECT  create_production(3 , 3 , CAST(32 AS MONEY) , 80,
	true ,true ,false ,false , true ,false , true , true );
	
SELECT  create_production(4 , 1 , CAST(70 AS MONEY) , 90,
	true ,true ,false ,false , true ,false , true , true );
	
SELECT  create_production(1 , 2 , CAST(20 AS MONEY) , 30,
	true ,true ,false ,false , true ,false , true , true );
	
SELECT  create_production(2 , 3 , CAST(35 AS MONEY) , 25,
	true ,true ,false ,false , true ,false , true , true );
	
SELECT  create_production(10 , 4 , CAST(40 AS MONEY) , 23,
	true ,true ,false ,false , true ,false , true , true );
	
SELECT  create_production(1 , 2 , CAST(20 AS MONEY) , 30,
	true ,true ,false ,false , true ,false , true , true );
	
SELECT  create_production(1 , 2 , CAST(20 AS MONEY) , 30,
	true ,true ,false ,false , true ,false , true , true );
	
SELECT  create_production(1 , 2 , CAST(20 AS MONEY) , 30,
	true ,true ,false ,false , true ,false , true , true );
	



SELECT * from production;
SELECT * from execution_production;
SELECT * from orders;
SELECT * from seam;
SELECT * from customers;
SELECT * from salesman;

CALL delete_order(1);
CALL all_reset();