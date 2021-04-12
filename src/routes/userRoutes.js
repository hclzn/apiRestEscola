// import express from 'express';
// const router = new express.Router();

import { Router } from 'express';
import userController from '../controllers/UserController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// Não deveriam existir
// router.get('/', loginRequired, userController.index);
// router.get('/:id', userController.show);

// router.post('/', userController.store); // Permiti criar
router.put('/', loginRequired, userController.update); // Não precisa inserir id, cada usuário edita seus próprios
router.delete('/:id', loginRequired, userController.delete); // Idem a cima, só pode excluir própria conta

export default router;

/*
Controller deve fazer uma das seguintes funções:
index -> lista todos os usuários -> get
store/create -> cria um novo usuário -> post
delete -> apaga um usuário -> delete
show -> mostra um usuário -> get
update -> atualiza um usuário -> patch ou put
*/
