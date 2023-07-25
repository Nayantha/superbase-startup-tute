import {createClient} from '@supabase/supabase-js'

const supabaseUrl = 'https://usrepgdzlrowfnkzumxd.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)


// let { data: items, error } = await supabase
//     .from('items')
//     .select('*')
// console.log(items, error)

const { data, error } = await supabase
    .from('items')
    .insert([
        { name: 'item 03'},
    ])
console.log(data, error)

