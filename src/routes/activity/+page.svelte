<script lang="ts">
    import { CodeIcon, ComputerIcon, FilmIcon } from "xyz-icon-set";
</script>

<main>
    <h2>活動内容</h2>
    <p>弊部では、以下のような活動を行っています</p>
    <div class="jk_grid_3 my-2">
        <div class="jk_card text-center">
            <div class="w-fit h-fit mx-auto">
                {@html (new CodeIcon({ theme: 'thin' })).toString().replace('width="24px"', 'width="5rem"').replace('height="24px"', 'width="5rem"')}
            </div>
            <h4>開発</h4>
            <p>Web, アプリケーション等</p>
        </div>
        <div class="jk_card text-center">
            <div class="w-fit h-fit mx-auto">
                {@html (new ComputerIcon({ theme: 'thin' })).toString().replace('width="24px"', 'width="5rem"').replace('height="24px"', 'width="5rem"')}
            </div>
            <h4>システム管理</h4>
            <p>部保有PC, サーバ等の管理</p>
        </div>
        <div class="jk_card text-center">
            <div class="w-fit h-fit mx-auto">
                {@html (new FilmIcon({ theme: 'thin' })).toString().replace('width="24px"', 'width="5rem"').replace('height="24px"', 'width="5rem"')}
            </div>
            <h4>メディアコンテンツ</h4>
            <p>DTM, 映像, 3D等</p>
        </div>
    </div>
    <h2>活動日・場所</h2>
    <p>毎週火・水・金曜 16:30-18:30</p>
    <p>5棟3階 データベース実験室</p>
    <h2 class="mt-2">設備</h2>
    <ul>
        <li>
            デスクトップPC 2台
            <ul>
                <li>Windows + Manjaro (AMD FX, GeForce)</li>
                <li>Manjaro (Ryzen, Radeon)</li>
            </ul>
        </li>
        <li>ペンタブレット 1台</li>
        <li>蔵書 多数</li>
    </ul>
</main>
