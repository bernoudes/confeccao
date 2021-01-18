CREATE PROCEDURE all_sel_productio_seam (limits INTEGER, pages INTEGER)
	LANGUAGE plpgsql
	AS $$
	BEGIN
		SELECT * FROM
		production j JOIN
		seam s
	
	END;
$$;
	
SELECT * FROM
	production j JOIN
		seam s