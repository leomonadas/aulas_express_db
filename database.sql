SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema loja
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema loja
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `loja` DEFAULT CHARACTER SET utf8 ;
USE `loja` ;

-- -----------------------------------------------------
-- Table `loja`.`userInfo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `loja`.`userInfo` (
  `idUser` INT NOT NULL,
  `name` VARCHAR(100) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `phone` INT NOT NULL,
  PRIMARY KEY (`idUser`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `loja`.`produto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `loja`.`produto` (
  `codigo` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NULL,
  `descricao` TEXT NULL,
  `preco` DOUBLE NULL,
  `estoque` INT NULL,
  `link_foto` VARCHAR(255) NULL,
  PRIMARY KEY (`codigo`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `loja`.`pedidoInfo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `loja`.`pedidoInfo` (
  `numero` INT NOT NULL AUTO_INCREMENT,
  `data_pedido` DATE NULL,
  `valor` DOUBLE NULL,
  `userInfo_idUser` INT NOT NULL,
  PRIMARY KEY (`numero`),
  INDEX `fk_pedidoInfo_userInfo_idx` (`userInfo_idUser` ASC) VISIBLE,
  CONSTRAINT `fk_pedidoInfo_userInfo`
    FOREIGN KEY (`userInfo_idUser`)
    REFERENCES `loja`.`userInfo` (`idUser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `loja`.`item_pedido`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `loja`.`item_pedido` (
  `num_sequencial` INT NOT NULL,
  `pedidoInfo_numero` INT NOT NULL,
  `produto_codigo` INT NOT NULL,
  `quantidade` INT NULL,
  `valor_total` DOUBLE NULL,
  PRIMARY KEY (`num_sequencial`),
  INDEX `fk_pedidoInfo_has_productInfo_productInfo1_idx` (`produto_codigo` ASC) VISIBLE,
  INDEX `fk_pedidoInfo_has_productInfo_pedidoInfo1_idx` (`pedidoInfo_numero` ASC) VISIBLE,
  CONSTRAINT `fk_pedidoInfo_has_productInfo_pedidoInfo1`
    FOREIGN KEY (`pedidoInfo_numero`)
    REFERENCES `loja`.`pedidoInfo` (`numero`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_pedidoInfo_has_productInfo_productInfo1`
    FOREIGN KEY (`produto_codigo`)
    REFERENCES `loja`.`produto` (`codigo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
