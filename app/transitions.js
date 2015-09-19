export default function () {
  this.transition(
    this.toRoute('lilongwe'),
    this.use('toLeft', {duration: 1000})
  );

  this.transition(
    this.toRoute('lusaka'),
    this.use('crossFade', {duration: 1000})
  );

  this.transition(
    this.toRoute('maputo'),
    this.use('fade', {duration: 1000})
  );

  this.transition(
    this.toRoute('cape-town'),
    this.use('toDown', {duration: 1000})
  );
}
