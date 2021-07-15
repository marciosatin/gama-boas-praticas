import imageError from '../../../assets/images/elements/darth-vader-404.jpg'

let Error404 = {
    is_private: false,
    render: async () => {
        let view = `${error}`
        return view
    },

    after_render: () => {
        console.log('Try another one... :)')
    }
}
let error = `
<div class="error-default" style="font-size: 50px; text-align: center; height: 100vh; background-position: fixed; background-image: url('${imageError}');">
    <h1>erro 404!</h1>
</div>
`

export default Error404;