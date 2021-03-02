--here all validations and automations have been created for inclusion in the tables
---------------------------------------------------------------------------
CREATE FUNCTION create_customers(name VARCHAR(40), cpf2 VARCHAR(20),name_brand VARCHAR(40))
	RETURNS text
	LANGUAGE plpgsql
	AS $$
	BEGIN
		IF(name IS NULL) OR (length(name) <= 2) THEN
			RETURN 'error_name';
		ELSEIF (cpf2 IS NOT NULL) AND (length(cpf2)< 11) THEN
			RETURN 'error_cpf';
		ELSEIF (SELECT EXISTS(SELECT cpf from customers WHERE cpf = cpf2 )) THEN
			RETURN 'error_cpf';
		ELSEIF (name_brand IS NULL) OR (length(name_brand) <= 0) THEN
			RETURN 'error_name_brand';
		END IF;
		
		INSERT INTO customers (name, cpf,name_brand) VALUES (name, cpf2,name_brand);
		RETURN 'success';
	END;
$$;

---------------------------------------------------------------------------
CREATE FUNCTION create_salesman(name VARCHAR(40), cpf_2 VARCHAR(20), 
admin BOOL, login_2 VARCHAR(20),password VARCHAR(30))
	RETURNS text
	LANGUAGE plpgsql
	AS $$
	BEGIN
		IF(name IS NULL) OR (length(name) <= 2) THEN
			return 'error_name';
		ELSEIF (cpf_2 IS NULL) OR (SELECT EXISTS(SELECT cpf FROM salesman WHERE cpf = cpf_2))THEN
			RETURN 'error_cpf';
		ELSEIF(admin IS NULL) THEN
			admin = false;
		ELSEIF(login_2 IS NULL) OR (SELECT EXISTS(SELECT login FROM salesman WHERE login = login_2)) OR
			(length(login_2) <= 2)THEN
				RETURN 'error_login';
		ELSEIF(password IS NULL) OR (length(password) < 3) THEN
			RETURN 'error_password';
		END IF;
		
		INSERT INTO salesman (name, cpf, admin,login,password)
			VALUES (name, cpf_2, admin,login_2,password);
			
		RETURN 'success';
	END;
$$;


---------------------------------------------------------------------------
CREATE FUNCTION create_orders(salesman_id INTEGER, customers_id INTEGER, money_input MONEY, money_all MONEY)
	RETURNS TEXT
	LANGUAGE plpgsql
	AS $$
	DECLARE
		date_now DATE:= (SELECT now()::DATE);
		date_now_year INTEGER := (SELECT EXTRACT(YEAR FROM (SELECT now()::DATE)))::DECIMAL;
		date_now_month INTEGER := (SELECT EXTRACT(MONTH FROM (SELECT now()::DATE)))::DECIMAL;
		cd_value INTEGER;
		cd_previous VARCHAR(15);
		cd_previous_array INTEGER[3];
		cd_new TEXT;
	BEGIN
		--checking the informations
		IF(customers_id IS NULL) OR (SELECT NOT EXISTS( SELECT id FROM customers WHERE id = customers_id)) THEN
			RETURN 'erro_customers';
		ELSEIF (salesman_id IS NULL) OR (SELECT NOT EXISTS(SELECT id FROM salesman WHERE id = salesman_id)) THEN
			RETURN 'erro_salesman';
		END IF;
		
		--create the value
		IF(SELECT NOT EXISTS(SELECT id FROM orders ORDER BY id DESC LIMIT 1)) THEN
			cd_previous := null;
			cd_value := 1;
		ELSE
			cd_previous := (SELECT cd_orders FROM orders ORDER BY id DESC LIMIT 1);
			cd_previous_array [1] := (SELECT (string_to_array(cd_previous,'-'))[1]::DECIMAL);
			cd_previous_array [2] := (SELECT (string_to_array(cd_previous,'-'))[2]::DECIMAL);
			cd_previous_array [3] := (SELECT (string_to_array(cd_previous,'-'))[3]::DECIMAL);
			
			IF(date_now_month = cd_previous_array[2]) THEN
				cd_value := (cd_previous_array[3]) + 1;
			ELSE
				cd_value := 1;
			END IF;
		END IF;
		
		--create the cd_new
		cd_new := (SELECT(concat(
			CAST(date_now_year AS VARCHAR),'-',
			CAST(date_now_month AS VARCHAR),'-',
			CAST(cd_value AS VARCHAR)
		)));

		INSERT INTO orders (cd_orders,customers_id,salesman_id,money_input,money_all,date_begin)
			VALUES (cd_new,customers_id,salesman_id,money_input,money_all,date_now);
			
		RETURN 'success';
	END;
$$;
---------------------------------------------------------------------------
CREATE FUNCTION create_production(
	orders_id_2 INTEGER, product_id INTEGER, price_unity MONEY,quantity_products INTEGER,
	embroidery BOOL,silk BOOL,laser_applique BOOL,laser_holes BOOL, sublimation_applique BOOL,
	sublimation_body BOOL, vies BOOL, forro BOOL
)
	RETURNS text
	LANGUAGE plpgsql
	AS $$
	DECLARE
		cd_production_previous VARCHAR(15);
		cd_production VARCHAR(15);
		cd_value INTEGER;
	BEGIN
		IF (SELECT NOT EXISTS(SELECT id FROM orders WHERE id = orders_id_2)) THEN
			RETURN 'error_orders_id';
		ELSEIF (SELECT NOT EXISTS(SELECT id FROM product WHERE id = product_id)) THEN
			RETURN 'error_product_id';
		ELSEIF (price_unity IS NULL) OR (price_unity <= CAST(0 AS MONEY)) THEN
			RETURN 'error_price_unity';
		ELSEIF (quantity_products IS NULL) OR (quantity_products <=0) THEN
			RETURN 'error_quantity_products';
		END IF;
		
		IF embroidery IS NULL THEN embroidery := false; END IF;
		IF silk IS NULL THEN silk := false; END IF;
		IF laser_applique IS NULL THEN laser_applique := false; END IF;
		IF laser_holes IS NULL THEN laser_holes := false; END IF;
		IF sublimation_applique IS NULL THEN sublimation_applique := false; END IF;
		IF sublimation_body IS NULL THEN sublimation_body := false; END IF;
		IF vies IS NULL THEN vies := false; END IF;
		IF forro IS NULL THEN forro := false; END IF;
		
		--create the value for cd_production--
		IF (SELECT EXISTS(SELECT orders_id FROM production WHERE orders_id = orders_id_2)) THEN
			cd_value :=(
				SELECT cd_refer_production FROM production 
				WHERE orders_id = orders_id_2 ORDER BY cd_refer_production DESC LIMIT 1
			);
		ELSE
			cd_value := 0;
		END IF;
		
		cd_value := cd_value +1; --Starting count to 1
		
		cd_production := (SELECT concat(
			(SELECT cd_orders FROM orders WHERE id = orders_id_2),'-',
			CAST(cd_value AS VARCHAR)
		));
	
		INSERT INTO	production 
			(cd_production, orders_id, product_id, cd_refer_production, sales_price_unity,
			sales_quantity_products, sales_embroidery, sales_silk, sales_laser_applique,
			sales_laser_holes, sales_sublimation_applique, sales_sublimation_body,
			sales_vies, sales_forro)
			VALUES 
			(cd_production,orders_id_2,product_id,cd_value,price_unity,quantity_products,
			embroidery,silk,laser_applique,laser_holes,sublimation_applique,sublimation_body,
			vies,forro);
		RETURN 'success';
	END;
$$;
