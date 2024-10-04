drop database if exists idenuncia;

create database idenuncia;

use idenuncia;

create table setor(
  codigo int primary key auto_increment,
  nome varchar(255),
  descricao blob,
  cor varchar(255)
);

create table funcionario(
  codigo int primary key auto_increment,
  nome varchar(255),
  ano_nascimento int,
  setor_codigo int,
  constraint fk_setor foreign key (setor_codigo) references setor(codigo)
);

create table denuncia(
  codigo int primary key auto_increment,
  tipo varchar(255)
);

create table denuncia_funcionario(
  codigo int primary key auto_increment,
  denuncia_codigo int,
  funcionario_codigo int,
  data_criacao date,
  constraint fk_denuncia foreign key (denuncia_codigo) references denuncia(codigo),
  constraint fk_funcionario foreign key (funcionario_codigo) references funcionario(codigo)
);