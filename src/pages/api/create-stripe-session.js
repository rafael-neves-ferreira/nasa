import axios from 'axios';

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

async function CreateStripeSession(req, res) {
    const { item } = req.body;
    console.log(item);
    try {
        var cartSession = await axios.post('https://cafest-back.dev-rafael-ferreira.com/api/cart/create', item);

    } catch (error) {
        if (error.response.status === 422) {
            res.status(422).json(error.response.data)
        }
    }
    if (cartSession) {
        const redirectURL =
            process.env.NODE_ENV === 'development' ?
                'https://dev-rafael-ferreira.com'
                : 'https://dev-rafael-ferreira.com';

        const transformedItem = {
            price_data: {
                currency: 'eur',
                product_data: {
                    images: [item.image],
                    name: item.name,
                    description: item.description,
                },
                unit_amount: parseFloat(item.price).toFixed(2) * 100,
            },
            quantity: item.products[0].qnty,
        };

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [transformedItem],
            mode: 'payment',
            customer_email: item.email,
            success_url: redirectURL + '/success?sessionId=' + cartSession.data,
            cancel_url: redirectURL + '/cart',
            metadata: {
                images: item.image,
            },
        });

        res.json({ id: session.id })
    }
}

export default CreateStripeSession;