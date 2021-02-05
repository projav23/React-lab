export const data = {
  navbar: {
      logo: { src: 'https://programandoweb.net/wp-content/uploads/2019/04/reactjs.png', alt: 'put alt' },
      title: 'React',
      links: [
          {
              to: '#',
              label: 'contact'
          },
          {
              to: '#',
              label: 'documentation'
          },
          {
              to: '#',
              label: 'api'
          },
      ]
  },
  hero: {
      title: 'This is React',
      subtitle: 'a powerful js library',
      img: { src: 'https://www.onlineinterviewquestions.com/storage/posts/November2018/nozBZH0NtDyhPT76edHy-medium.jpg', alt: 'put alt' }
  },
  body: {
      utilsSection: {
          sectionTitle: 'utils',
          cards: [
              {
                  utilName: 'React',
                  utilDescription: 'React te ayuda a crear interfaces de usuario interactivas de forma sencilla. Diseña vistas simples para cada estado en tu aplicación, y React se encargará de actualizar y renderizar de manera eficiente los componentes correctos cuando los datos cambien.',
                  utilImg: {
                      src: 'https://www.cloudanalogy.co.uk/wp-content/uploads/2019/06/react.png',
                      alt: 'put alt here'
                  }
              },
              {
                  utilName: 'React Dom',
                  utilDescription: 'El paquete react-dom proporciona métodos específicos del DOM que pueden ser utilizados en el nivel más alto de tu aplicación como una vía de escape del modelo de React si así lo necesitas. La mayoría de tus componentes no deberían necesitar usar este módulo.',
                  utilImg: {
                      src: 'https://pbs.twimg.com/profile_images/798712123727589377/BxhBmXKN.jpg',
                      alt: 'put alt here'
                  }
              },
              {
                  utilName: 'React Native',
                  utilDescription: 'React Native es un framework JavaScript para crear aplicaciones reales nativas para iOS y Android, basado en la librearía de JavaScript React para la creación de componentes visuales, cambiando el propósito de los mismos para, en lugar de ser ejecutados en navegador, correr directamente sobre las plataformas móviles nativas, en este caso iOS y Andorid. Es decir, en lugar de desarrollar una aplicación web híbrida o en HTML5, lo que obtienes al final como resultado es una aplicación real nativa, indistinguible de la que podrías desarrollar con tu código en Objective-C o Java.',
                  utilImg: {
                      src: 'https://miro.medium.com/max/1024/1*xDi2csEAWxu95IEkaNdFUQ.png',
                      alt: 'put alt here'
                  }
              },
          ]
      },
      developersSection: {
          sectionTitle: 'Developers',
          desctionDescription: 'People that help build React',
          developers: [
              {
                  name: 'Cristiano Ronaldo',
                  description: 'El mejor de todos los tiempos',
                  developerImg: {
                      src: 'https://fotos00.noticiasdenavarra.com/2021/02/04/690x278/cr7-maximo-1.jpg',
                      alt: 'put alt here'
                  }
              },
              {
                  name: 'Lionel Messi',
                  description: 'El que va despues de CR7',
                  developerImg: {
                      src: 'https://pbs.twimg.com/profile_images/2863992015/4b96f043ae87d18154ebeb3dd497d72f.jpeg',
                      alt: 'put alt here'
                  }
              },
          ]
      }
  },
  footer: {
      contact: {
          email: 'react@react.com',
          phone: '0800-react',
          address: {
              country: 'USA',
              street: 'a USA street',
              state: 'NY'
          }
      },
      links: [
          {
              to: '#',
              label: 'react conf'
          },
          {
              to: '#',
              label: 'react podcast'
          },
          {
              to: '#',
              label: 'react news'
          },
      ]
  }
}