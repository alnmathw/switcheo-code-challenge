SELECT T1.address 
FROM (
  SELECT Q.address
  FROM (
    SELECT address,
    CASE
      WHEN denom = 'usdc' THEN amount * 0.000001
      WHEN denom = 'swth' THEN amount * 0.00000005
      WHEN denom = 'tmz' THEN amount * 0.003
    END as usd_amount FROM balances b
  ) as Q
  GROUP BY Q.address
  HAVING SUM(Q.usd_amount) > 500 
) T1 
INNER JOIN trades T2 ON T1.address = T2.address
WHERE T2.block_height > 730000
