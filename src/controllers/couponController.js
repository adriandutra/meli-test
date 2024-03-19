import Coupon from "../model/Coupon.js";

export const getPrice = (req, res) => {

    if (!req.body.item_ids) {
        res.status(400).send({ message: "Item_ids can not be empty!" });
        return;
    }

    if (!req.body.amount) {
        res.status(400).send({ message: "Amount can not be empty!" });
        return;
    }

    let coupons = req.body.item_ids;
    let amount = req.body.amount;

    let arrCoupon = [];
    let i = 5;
    coupons.forEach(async(coupon) => {
      var arr = [];
      await fetch(process.env.MELI_API + coupon)
        .then(res => res.json())
        .then(res => {
            if (!res.error)
            {
                arr['item_id'] = coupon;
                arr['price'] = res.price;
                arrCoupon.push(arr);
            }
        }, (e) => {
            console.log('error' + e);
            return null;
        });

    });
    console.log(arrCoupon);
    if (arrCoupon.length)
    {
        const sorter = (a, b) => {
            return a.price - b.price;
         };
         const sortByPrice = arr => {
            arr.sort(sorter);
         };
        
        sortByPrice(arrCoupon);
    
        let acum = 0;
        let value = 0;
        var sec = [];
        var obj = new Object();
    
        arrCoupon.forEach((coupon) => {
            acum = acum + coupon.price;
            if(acum <= amount)
            {
                value = acum;
                sec.push(coupon.item_id);
            } 
            obj.item_ids = sec;
            obj.total = value;
            
        });
    
        let saveCoupon = obj.item_ids;
    
        for( let i=0; i < saveCoupon.length; i++)
        {
            const coupon = new Coupon({
                code: saveCoupon[i]
            });
    
            coupon.save(coupon);
        }
    
        return res.status(200).send({ item_ids: obj.item_ids, total: obj.total });
    }
    
    res.status(404).send({ message: "Item Ids not found" });
    return;
    
};

export const getAmount = async (req, res) =>{
    const count = await Coupon.aggregate([
       {
        "$group": { 
            _id: "$code", 
            countA: {$sum: 1} 
        }
       },
       {
        "$sort": {'countA': 1}
       },
       {
        "$limit": 5
        }
    ]);

    return res.status(200).send({ count });
}