export function load(app: any) {
    const url = app.url;

    // URL 변수 추출
    const href = url.href;
    const pathname = url.pathname;
    const search = url.search;
    const searchParams = url.searchParams;
    const origin = url.origin;
    const protocol = url.protocol;
    const host = url.host;
    const hostname = url.hostname;
    const port = url.port;


    console.log(`Href: ${href}`);
    console.log(`Pathname: ${pathname}`);
    console.log(`Search: ${search}`);
    console.log(`Origin: ${origin}`);
    console.log(`Protocol: ${protocol}`);
    console.log(`Host: ${host}`);
    console.log(`Hostname: ${hostname}`);
    console.log(`Port: ${port}`);

    // 필요한 작업 해준후
    return {
        pathname: getLastPathFromURL(href) ,
    };
}


function getLastPathFromURL(url: string): string {
    // URL을 '/'로 분할한 후, 마지막 요소를 반환
    const parts = url.split('/').filter(Boolean); // filter(Boolean)를 사용하여 빈 문자열을 제거
    return parts[parts.length - 1] || '';
}
