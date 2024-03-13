<script setup>
import { NCollapse } from 'naive-ui';
</script>

<template>
    <n-collapse>
        <n-collapse-item title="青铜" name="1">>
            <!-- Sidebar -->
            <div class="w-50 bg-gray-800 text-white">
                <!-- Sidebar content -->
                <ul>
                    <li class="py-2 px-4 hover:bg-gray-700">Menu Item 1</li>
                    <li class="py-2 px-4 hover:bg-gray-700">Menu Item 2</li>
                    <li class="py-2 px-4 hover:bg-gray-700">Menu Item 3</li>
                    <!-- Add more menu items here -->
                </ul>
            </div>
        </n-collapse-item>
    </n-collapse>

</template>

<style></style>