import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.component.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.component.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'logout',
    loadChildren: () => import('./logout/logout.module').then( m => m.LogoutPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.component.module').then( m => m.HomeComponentModule)
  },
  {
    path: 'editprofile',
    loadChildren: () => import('./editprofile/editprofile.module').then( m => m.EditprofilePageModule)
  },
  {
    path: 'myquestions',
    loadChildren: () => import('./my-question/my-question.module').then( m => m.MyQuestionComponentModule)
  },
  {
    path: 'ion-rating/:id',
    loadChildren: () => import('./ion-rating/ion-rating.module').then( m => m.IonRatingComponentModule)
  },
  {
    path: 'question-details/:id',
    loadChildren: () => import('./question-details/question-details.module').then( m => m.QuestionDetailsComponentModule)
  },
  {
    path: 'conversation/:id',
    loadChildren: () => import('./conversation/conversation.module').then( m => m.ConversationComponentModule)
  },
  {
    path: 'qna',
    loadChildren: () => import('./ask-question/ask-question.module').then( m => m.AskQuestionPageModule)
  },
  {
    path: 'imagePicker/:id',
    loadChildren: () => import('./image-picker/image-picker.module').then( m => m.ImagePickerComponentModule)
  },
  {
    path: 'notfound',
    loadChildren: () => import('./notfound/notfound.module').then( m => m.NotfoundPageModule)
  },
  {
    path: 'video/:id',
    loadChildren: () => import('./video/video.module').then( m => m.VideoPageModule)
  },
  {
    path: 'audio/:id',
    loadChildren: () => import('./audio/audio.module').then( m => m.AudioPageModule)
  },
  {
    path: 'attach/:id',
    loadChildren: () => import('./attach/attach.module').then( m => m.AttachPageModule)
  },  {
    path: 'wallet-topup',
    loadChildren: () => import('./wallet-topup/wallet-topup.module').then( m => m.WalletTopupPageModule)
  },
  {
    path: 'wallet-topup-result',
    loadChildren: () => import('./wallet-topup-result/wallet-topup-result.module').then( m => m.WalletTopupResultPageModule)
  },





];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
