const content = null || document.getElementById("content");

const ochomenosochoLastestVideosAPI = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCyF7kf3qKKtaaKr1xEUtqEA&part=snippet%2Cid&order=date&maxResults=10';

const apiDefaultoptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0600898dcamsh5cc450e492b1242p1be4b4jsn30fa20daa008',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};


const getLastestYoutubeVideos = async (urlApi, options) => {
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
};


(async function () { try {
    const videos = await getLastestYoutubeVideos(ochomenosochoLastestVideosAPI, apiDefaultoptions);
    console.log(videos);
    let view = `
    ${videos.items.map((video) => `
        <div class="group relative">
        <div
            class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
            <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
        </div>
        <div class="mt-4 flex justify-between">
        <a href="https://youtube.com/watch?v=${video.id.videoId}" target="_blank">
            <h3 class="text-sm text-gray-700">
            <span aria-hidden="true" class="absolute inset-0"></span>
            ${video.snippet.title}
            </h3>
        </a>
        </div>
    </div>
    `).slice(0, 4).join('')}
    `;
    content.innerHTML = view;
    } catch (error) {
    console.log(error);
    }
})();