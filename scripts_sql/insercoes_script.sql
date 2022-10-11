-- Insere tuplas em Produto
INSERT INTO produto (pnome, valor, empresa, descricao)
VALUES
    ('Xbox One', '1200', 'Microsoft', 'Console lançado em 2013'),
    ('Switch', '1300', 'Nintendo', 'Console lançado em 2016'),
    ('Playstation 4', '1500', 'Sony', 'Console lançado em 2013'),
    ('Joystick Xbox 360', '120', 'Microsoft', 'O controle do antigo Xbox'),
    ('God of War', '99', 'Sony', 'Último jogo da saga de Kratos');
    ('Xbox Series X', '4500', 'Microsoft', 'O console mais poderoso!');

-- Insere tuplas em Cliente
INSERT INTO cliente (cnome, sobrenome, datanascimento)
VALUES
    ('Jorge', 'Brasilis', '07/10/1998'),
    ('Marcelo', 'Ferraz', '12/07/1999'),
    ('Rita', 'Lopes', '28/03/1979'),
    ('Osvaldo', 'Pires', '07/10/1973'),
    ('Irineu', 'Oliveira', '01/01/1993'),
    ('Luke', 'Escáiualquer', '17/08/1978');

-- Insere tuplas em Funcionario
INSERT INTO funcionario (fnome, sobrenome, datanascimento)
VALUES
    ('Bruno', 'Rabello', '18/11/1991'),
    ('Lúcia', 'Marinho', '03/05/1980'),
    ('Karla', 'Pereira', '15/05/2000'),
    ('Ash', 'Ketchum', '01/01/1990'),
    ('Iran', 'Ferreira', '10/02/2001'),
    ('Jailson', 'Melandes', '04/03/1985');

-- Insere tuplas em Venda
INSERT INTO venda (datavenda, clienteid, funcionarioid)
VALUES
    ('28/09/2022', '1', '2'),
    ('12/08/2021', '2', '3'),
    ('11/10/2022', '3', '4'),
    ('05/05/2022', '4', '1'),
    ('02/03/2021', '5', '5');