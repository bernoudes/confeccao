
CREATE PROCEDURE  delete_production(pa_cd_production VARCHAR(15))
	LANGUAGE plpgsql
	AS $$
	BEGIN
		--THE (IF) EXISTS FOR NOT GENERATE AN ERROR IN THE TABLE
		IF(SELECT EXISTS(SELECT cd_production FROM production WHERE cd_production = pa_cd_production)) THEN
			DELETE FROM production WHERE cd_production = pa_cd_production;
		END IF;
		
		IF(SELECT EXISTS(SELECT cd_production FROM execution_production WHERE cd_production = pa_cd_production)) THEN
			DELETE FROM execution_production WHERE cd_production = pa_cd_production;
		END IF;
		
		IF(SELECT EXISTS(SELECT cd_production FROM seam WHERE cd_production = pa_cd_production)) THEN
			DELETE FROM seam WHERE cd_production = pa_cd_production;
		END IF;
	END;
$$

CREATE PROCEDURE delete_order(pa_order_id INTEGER)
	LANGUAGE plpgsql
	AS $$
	DECLARE
	cd_production_array VARCHAR(15)[];
	BEGIN
		IF (SELECT EXISTS(SELECT id FROM orders WHERE id = pa_order_id)) THEN
			cd_production_array := ARRAY(SELECT cd_production FROM production WHERE orders_id = pa_order_id);
			
			IF(cd_production_array IS NOT NULL) AND (array_length(cd_production_array,1) > 0) THEN
				FOR i IN 1..array_length(cd_production_array,1) LOOP
					CALL delete_production(cd_production_array[i]);
				END LOOP;
			END IF;
			
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
