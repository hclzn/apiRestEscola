"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }// import express from 'express';
// const router = new express.Router();

var _express = require('express');
var _UserController = require('../controllers/UserController'); var _UserController2 = _interopRequireDefault(_UserController);

var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const router = new (0, _express.Router)();

// Não deveriam existir
// router.get('/', loginRequired, userController.index);
// router.get('/:id', userController.show);

// router.post('/', userController.store); // Permiti criar
router.put('/', _loginRequired2.default, _UserController2.default.update); // Não precisa inserir id, cada usuário edita seus próprios
router.delete('/:id', _loginRequired2.default, _UserController2.default.delete); // Idem a cima, só pode excluir própria conta

exports. default = router;

/*
Controller deve fazer uma das seguintes funções:
index -> lista todos os usuários -> get
store/create -> cria um novo usuário -> post
delete -> apaga um usuário -> delete
show -> mostra um usuário -> get
update -> atualiza um usuário -> patch ou put
*/
