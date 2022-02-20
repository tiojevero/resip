import { ref } from "vue";

export default function (url: string) {
    const data: any = ref(null);
    const fetchData = async () => {
        try {
            const response = await fetch(url);
            const json = await response.json();
            data.value = json;
        } catch (errors) {
            console.log(errors);
        }
    };
    return { data, fetchData };
}
