
CREATE FUNCTION  delete_production(pa_cd_production VARCHAR(15))
	RETURNS text
	LANGUAGE plpgsql
	AS $$
	DECLARE 
		cd_ref_delete INTEGER := (SELECT cd_refer_production FROM production WHERE cd_production = pa_cd_production);
		cd_orders_id INTEGER := (SELECT orders_id FROM production WHERE cd_production = pa_cd_production);
		cd_orders VARCHAR(15) := (SELECT cd_orders FROM orders WHERE id = cd_orders_id);
	BEGIN
		--THE (IF) EXISTS FOR NOT GENERATE AN ERROR IN THE TABLE
		IF(SELECT EXISTS(SELECT cd_production FROM production WHERE cd_production = pa_cd_production)) THEN
			DELETE FROM production WHERE cd_production = pa_cd_production;
			
			UPDATE production SET 
				cd_refer_production = cd_refer_production - 1,
				cd_production = (SELECT concat(cd_orders,'-',cd_refer_production - 1))
				WHERE production.orders_id = cd_orders_id and cd_refer_production > cd_ref_delete;
			RETURN 'success';
		END IF;
		RETURN 'error_delete_production';
	END;
$$

CREATE PROCEDURE delete_order(pa_order_id INTEGER)
	LANGUAGE plpgsql
	AS $$
	BEGIN
		IF (SELECT EXISTS(SELECT id FROM orders WHERE id = pa_order_id)) THEN
			DELETE FROM production WHERE production.orders_id = pa_order_id;
			DELETE FROM orders WHERE id = pa_order_id;
		END IF;
	END;
$$;

	
--THE FOLLOWING PROCEDURES ARE FOR THE TIME OF DEVELOPMENT, NOT PRODUCTION
CREATE PROCEDURE all_reset()
	LANGUAGE plpgsql
	AS $$
	BEGIN
		DELETE FROM seam;
		DELETE FROM execution_production;
		DELETE FROM production;
		DELETE FROM orders;
		DELETE FROM salesman;
		DELETE FROM customers;
		
		ALTER SEQUENCE orders_id_seq RESTART WITH 1;
		ALTER SEQUENCE salesman_id_seq RESTART WITH 1;
		ALTER SEQUENCE customers_id_seq RESTART WITH 1;
	END;
$$;
